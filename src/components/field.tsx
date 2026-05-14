// ─── Field wrapper ────────────────────────────────────────────────────────────

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[13px] montserrat-medium text-zinc-700">{label}</span>
      {children}
    </div>
  );
}