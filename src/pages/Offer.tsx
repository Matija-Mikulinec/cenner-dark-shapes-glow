
import React from "react";

const Offer = () => (
  <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center bg-background">
    <div className="max-w-xl px-4 py-10 bg-card/70 rounded-xl shadow-lg border border-card">
      <h1 className="text-4xl font-bold mb-4">Naša ponuda</h1>
      <p className="text-lg text-gray-300 mb-6">
        Pregledajte aktualne usluge, projekte i mogućnosti koje Cenner nudi. 
        Pronađite idealnu priliku za razvoj svojih vještina ili širenje poslovanja.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-cenner hover:bg-cenner-dark text-white px-5 py-2 rounded-md">Pogledaj usluge</button>
        <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-md">Pridruži se kao stručnjak</button>
      </div>
    </div>
  </div>
);

export default Offer;
