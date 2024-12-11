/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLETCONNECT_PROJECT_ID: string;
  readonly VITE_BACKEND_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
