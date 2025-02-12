export async function sendSelectedTeeth(selectedTeeth: any[]) {
  try {
    const selected = selectedTeeth.filter(tooth => tooth.selected);

    if (selected.length === 0) {
      console.log("Nenhum dente selecionado.");
      return;
    }

    for (const tooth of selected) {
      const requestBody = {
        name: tooth.name,
        type: tooth.type,
        condition: "Bom"
      };

      console.log("Enviando para a API:", requestBody);

      const response = await fetch("http://localhost:3000/tooth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) throw new Error("Erro ao enviar dente");

      console.log("Resposta da API:", await response.json());
    }
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
