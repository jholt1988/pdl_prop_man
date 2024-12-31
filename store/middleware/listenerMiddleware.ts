import { createListenerMiddleware, addListener } from '@reduxjs/toolkit'


export const listenerMiddleware = createListenerMiddleware()

export const startAppListening = listenerMiddleware.startListening.withTypes()

export type AppStartListening = typeof startAppListening

export const addAppListener = addListener.withTypes()
export type AppAddListener = typeof addAppListener