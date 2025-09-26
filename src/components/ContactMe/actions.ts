"use server";

export async function handleContactForm(formData: FormData) {
  const AccessKey = "3ef49d42-d745-4631-ad29-52ced2639ecc";

  formData.append("access_key", AccessKey);

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const data = await res.json();

    if (data.success) {
      console.log("✅ Submission successful:", data);
    } else {
      console.error("❌ Submission failed:", data);
    }

    return data;
  } catch (err) {
    console.error("Submission Failed:", err);
    throw err;
  }
}
