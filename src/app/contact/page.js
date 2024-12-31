// src/app/contact/page.js
import Layout from '../components/Layout.js';
export default function Contact() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-dark">
          <div className=" max-w-md w-full bg-dark shadow-md rounded">
              <h1 className="text-3xl font-bold text-center">Contact Us</h1>
              <form className="mt-4">
                  <label className="block mb-2">
                      Name:
                      <input 
                          type="text" 
                          className="block border p-2 w-full mt-1 rounded" 
                      />
                  </label>
                  <label className="block mb-2">
                      Email:
                      <input 
                          type="email" 
                          className="block border p-2 w-full mt-1 rounded" 
                      />
                  </label>
                  <label className="block mb-2">
                      Message:
                      <textarea 
                          className="block border p-2 w-full mt-1 rounded" 
                          rows="4"
                      ></textarea>
                  </label>
                  <button 
                      type="submit" 
                      className="bg-custom-yellowAti text-white p-2 mt-4 w-full rounded"
                  >
                      Send
                  </button>
              </form>
          </div>
      </div>
    </Layout>
  );
}