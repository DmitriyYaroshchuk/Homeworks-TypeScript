export interface Settings {
    theme: 'dark' | 'light',
    notifications: boolean,
    autoSave: {
        enable: boolean
        interval: number,
    }
}