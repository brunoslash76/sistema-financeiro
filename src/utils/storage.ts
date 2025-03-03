'use client'

export function setSessionStorage(key: string, value: string) {
  if (!window) {
    throw new Error('Object window not found')
  }

  try {
    sessionStorage.setItem(key, value)
  } catch(error: unknown) {
    throw new Error(JSON.stringify(error) as string)
  }
}

export function getSessionStorage(key: string) {
  if (!window) {
    throw new Error('Object window not found')
  }

  try {
    const value = sessionStorage.getItem(key)!
    return JSON.parse(value)
  } catch(error: unknown) {
    throw new Error(JSON.stringify(error) as string)
  }
}

export function removeSessionStorage(key: string) {
  if (!window) {
    throw new Error('Object window not found')
  }

  try {
    sessionStorage.removeItem(key)
  } catch(error: unknown) {
    throw new Error(JSON.stringify(error) as string)
  }
}
