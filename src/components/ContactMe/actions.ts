"use server";

export async function handleContactForm(formData: FormData) {
  const AccessKey = "9dd3f533-3c65-44dd-8876-2c9592b6c370";

  const object = Object.fromEntries(formData.entries());
  
  const bodyData = {
    ...object,
    access_key: AccessKey
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (!res.ok) {
      return { success: false, message: `Server responded with status: ${res.status}` };
    }

    const data = await res.json();

    if (data.success) {
      return { success: true, data: data };
    } else {
      return { success: false, message: data.message || "Web3Forms rejection." };
    }

  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : "Network error occurred." };
  }
}