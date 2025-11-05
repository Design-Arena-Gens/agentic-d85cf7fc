function Stat({ label, value }) {
  return (
    <div style={{ padding: 16, border: '1px solid #e2e8f0', borderRadius: 12 }}>
      <div style={{ fontSize: 12, color: '#64748b', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>{value}</div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 36, margin: 0, letterSpacing: -0.5 }}>Why hydrogen cars haven?t taken off</h1>
        <p style={{ marginTop: 8, color: '#334155' }}>A concise, evidence?based explainer focused on passenger vehicles</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 28 }}>
        <Stat label="Refueling stations (global)" value="?1,200+ H2 vs 400k+ EV chargers" />
        <Stat label="Well?to?wheel efficiency" value="~25?30% H2 vs ~70?77% BEV" />
        <Stat label="Vehicle availability" value="< 5 mass?market H2 models" />
        <Stat label="Fuel cost parity" value="> 2? per?mile vs BEV (typical)" />
      </section>

      <article style={{ lineHeight: 1.75, fontSize: 16 }}>
        <h2 style={{ fontSize: 22, marginTop: 28 }}>1) Physics and efficiency</h2>
        <p>
          Making, compressing/liquefying, transporting, and converting hydrogen back to electricity in a fuel cell incurs
          multiple energy losses. End?to?end, hydrogen fuel?cell drivetrains deliver roughly 25?30% of the original
          renewable electricity to the wheels, compared with ~70?77% for battery?electric vehicles (BEVs). The result is
          higher energy demand, higher costs, and a larger supporting infrastructure footprint for the same mobility.
        </p>

        <h2 style={{ fontSize: 22, marginTop: 28 }}>2) Infrastructure chicken?and?egg</h2>
        <p>
          A nationwide network of safe, reliable, and affordable hydrogen stations is expensive to build and operate.
          Without stations, consumers won?t buy vehicles; without vehicles, investors won?t build stations. Public EV
          charging, in contrast, leverages the existing electric grid and scales incrementally from home/workplace charging.
        </p>

        <h2 style={{ fontSize: 22, marginTop: 28 }}>3) Cost of green hydrogen</h2>
        <p>
          Only green hydrogen (made via electrolysis with renewable power) achieves meaningful lifecycle emissions
          reductions for passenger cars. Today it remains relatively scarce and costly; most available hydrogen is grey
          (from natural gas), which undermines climate benefits and can make operating costs volatile.
        </p>

        <h2 style={{ fontSize: 22, marginTop: 28 }}>4) Station uptime and safety complexity</h2>
        <p>
          Hydrogen stations require high?pressure storage (350?700 bar), cooling, compression, and strict safety systems.
          Real?world deployments have struggled with uptime, maintenance, and permitting complexity, which erodes user trust
          and convenience compared with the maturing EV charging ecosystem.
        </p>

        <h2 style={{ fontSize: 22, marginTop: 28 }}>5) Battery progress outpacing the niche</h2>
        <p>
          Rapid advances in battery cost, energy density, charging speeds, and supply chains have closed historic gaps in
          range and refueling time. For most daily driving, overnight home charging is both cheaper and more convenient than
          visiting a fueling station.
        </p>

        <h2 style={{ fontSize: 22, marginTop: 28 }}>6) Total cost of ownership</h2>
        <p>
          Limited model availability, expensive fuel?cell stacks, high?pressure tanks, and station mark?ups typically make
          hydrogen per?mile costs higher than BEVs. Resale value and servicing are also uncertain in small markets.
        </p>

        <h2 style={{ fontSize: 22, marginTop: 28 }}>7) Where hydrogen can still fit</h2>
        <p>
          Hydrogen is more promising where batteries struggle: long?duration energy storage, high?temperature industrial
          heat, steel, chemicals, shipping, and possibly specific heavy?duty or long?haul use cases?especially where dedicated
          depot refueling is feasible. Passenger cars, however, are generally better served by BEVs.
        </p>

        <div style={{ marginTop: 28, background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
          <strong>Bottom line:</strong> Hydrogen passenger vehicles face a structural disadvantage versus BEVs due to physics (efficiency),
          infrastructure economics, and fuel availability. These headwinds make mass?market success unlikely in the near term.
        </div>
      </article>
    </>
  );
}
