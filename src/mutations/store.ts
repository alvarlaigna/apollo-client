export interface MutationStore {
  [mutationId: string]: MutationStoreValue;
}

export interface MutationStoreValue {
  mutationString: string;
  variables: Object;
  loading: boolean;
  error: Error | null;
}

