export default function PostJob() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Post a New Job</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Job Title" className="w-full p-2 border rounded" required />
        <textarea placeholder="Job Description" className="w-full p-2 border rounded" rows="4" required></textarea>
        <input type="text" placeholder="Required Skills (comma separated)" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post Job</button>
      </form>
    </div>
  );
}
