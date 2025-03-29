export const GPU_DISPLAY_NAMES: Record<string, string> = {
  "all": "All GPUs",
  "T4": "Tesla T4",
  "H100": "NVIDIA H100",
  "A100-80GB": "NVIDIA A100 (80GB)",
  "A10G": "NVIDIA A10G",
  "L40S": "NVIDIA L40S",
  "L4": "NVIDIA L4"
} as const;

export const GPU_DISPLAY_ON_PROFILE = {
  "T4": "T4",
  "H100": "H100",
  "A100-80GB": "A100",
  "A10G": "A10G",
  "L40S": "L40S",
  "L4": "L4",
  "none": "N/A"
} as const;

export const ADJUSTMENT_FACTOR = 32; // No reasoning for this, i just like 2^5