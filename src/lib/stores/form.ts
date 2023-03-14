import { writable } from "svelte/store";
export interface IFormStore {
  length: number;
  "with-uppercase": boolean;
  "with-lowercase": boolean;
  "with-number": boolean;
  "with-symbols": boolean;
}
export default writable<IFormStore>({
  length: 16,
  "with-uppercase": true,
  "with-lowercase": false,
  "with-number": false,
  "with-symbols": false,
});
