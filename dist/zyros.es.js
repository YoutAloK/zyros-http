import n from "axios";
const r = n.create({
  baseURL: "",
  timeout: 5e3,
  headers: {
    "Content-Type": "application/json"
  }
});
async function u(e, a = {}) {
  try {
    const s = await r.get(e, a);
    return {
      success: !0,
      data: s.data,
      status: s.status
    };
  } catch (s) {
    return {
      success: !1,
      error: s.message,
      status: s?.response?.status || 500,
      data: null
    };
  }
}
async function c(e, a = {}, s = {}) {
  try {
    const t = await r.post(e, a, s);
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
  u as get,
  c as post
};
