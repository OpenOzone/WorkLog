import { useEffect, useState, useCallback } from 'react';

type UseIndexedDBReturn<T> = {
  add: (data: T) => Promise<void>;
  getAll: () => Promise<T[]>;
  remove: (id: number) => Promise<void>;
  ready: boolean;
};

export function useIndexedDB<T = any>(storeName: string): UseIndexedDBReturn<T> {
  const [db, setDb] = useState<IDBDatabase | null>(null);

  useEffect(() => {
    const request = indexedDB.open('worklog', 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = () => setDb(request.result);
    request.onerror = () => console.error('IndexedDB error:', request.error);
  }, [storeName]);

  const add = useCallback(
    (data: T) =>
      new Promise<void>((resolve, reject) => {
        if (!db) return reject('DB not initialized');
        const tx = db.transaction(storeName, 'readwrite');
        tx.objectStore(storeName).add(data);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      }),
    [db, storeName]
  );

  const getAll = useCallback(
    () =>
      new Promise<T[]>((resolve, reject) => {
        if (!db) return resolve([]);
        const tx = db.transaction(storeName, 'readonly');
        const req = tx.objectStore(storeName).getAll();
        req.onsuccess = () => resolve(req.result as T[]);
        req.onerror = () => reject(req.error);
      }),
    [db, storeName]
  );

  const remove = useCallback(
    (id: number) =>
      new Promise<void>((resolve, reject) => {
        if (!db) return reject('DB not initialized');
        const tx = db.transaction(storeName, 'readwrite');
        tx.objectStore(storeName).delete(id);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      }),
    [db, storeName]
  );

  return { add, getAll, remove, ready: !!db };
}
