interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT: string;
  // 다른 환경변수도 추가 가능
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
