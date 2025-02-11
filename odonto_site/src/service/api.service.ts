export async function sendSelectedTeeth(selectedTeeth: any[]) {
  try {
    const response = await fetch("http://localhost:3000/tooth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedTeeth)
    });
    if (!response.ok) throw new Error("Erro ao enviar dentes");
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}

export async function sendPatientData(patient: any) {
  try {
    const response = await fetch("http://localhost:3000/registers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient)
    });
    if (!response.ok) throw new Error("Erro ao cadastrar paciente");
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
}
