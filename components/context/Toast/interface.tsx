import { CustomToastProps } from "@/components/atoms/CustomToast/interface";

export interface ToastStateProps extends CustomToastProps {
  show: boolean;
}

export type VariantType = ToastStateProps["variant"];

export interface ToastContextType {
  showToast: (message: string, variant?: VariantType, delay?: number) => void;
}
