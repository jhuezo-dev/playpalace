export function updateSettings(key, value) {
    const s = JSON.parse(localStorage.getItem("playpalace"));
    if (!s) {
      localStorage.setItem("playpalace", JSON.stringify({ [key]: value }));
    } else {
      s[key] = value;
      localStorage.setItem("playpalace", JSON.stringify(s));
    }
  }