import a from "axios";
const r = a.create({
  baseURL: "",
  timeout: 5e3,
  headers: {
    "Content-Type": "application/json"
  }
});
async function o(s, e = {}) {
  try {
    const t = await r.get(s, e);
    return {
      success: !0,
      data: t.data,
      status: t.status
    };
  } catch (t) {
    return {
      success: !1,
      error: t.message,
      status: t?.response?.status || 500,
      data: null
    };
  }
}
export {
  o as get
};
