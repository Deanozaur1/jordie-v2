import React from "react"

interface SlotProps {
  component: any
  slotProps?: any
  children?: any
}

const Slot: React.FC<SlotProps> = ({
  component: slot,
  slotProps,
  children,
}: SlotProps) => {
  if (typeof slot === "function") {
    return slot(slotProps) ?? children ?? null
  }
  return slot ?? children ?? null
}

export default Slot
