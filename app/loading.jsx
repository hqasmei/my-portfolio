import Image from "next/image"

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex h-screen items-center justify-center">
      <Image src="/light-logo.png" alt="" width={60} height={60} />
    </div>
  )
}
