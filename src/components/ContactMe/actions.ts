"use server";

export async function handleContactForm(formData: FormData) {
  const AccessKey = "ea30ef72-044a-42f3-92bd-a1c2fc8552e9"; 

  const object = Object.fromEntries(formData.entries());
  
  const bodyData = {
    ...object,
    access_key: AccessKey,
    from: "Giorgi Gochitidze"
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // Force the server action to identify as your actual live website domain
        "Origin": "https://giorgig.netlify.app",
        "Referer": "https://giorgig.netlify.app/"
      },
      body: JSON.stringify(bodyData),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      return { success: true, data: data };
    } else {
      // Return the exact error message Web3Forms is sending back to help us debug
      return { success: false, message: data.message || `Web3Forms rejected with status ${res.status}` };
    }

  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : "Network error occurred." };
  }
}