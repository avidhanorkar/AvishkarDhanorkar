import Page from "./Page";

export default function GridBackgroundDemo() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative flex items-center justify-center">
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      {/* Centered Page */}
      <div className="relative z-10 mt-15">
        <Page />
      </div>
    </div>
  );
}