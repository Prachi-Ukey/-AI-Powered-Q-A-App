function RecentSearch({recentHistory, setRecentHistory, setSelectedHistory}) {

    const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([])
  }

    return (

        
    <div className="col-span-1 bg-zinc-800">
        <h1 className="text-xl text-white pt-3 flex justify-center">Recent Search
        <button onClick={clearHistory} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
        </h1>
        <ul className="text-left overflow-auto mt-5">
          {
            recentHistory && recentHistory.map((item, index) => (
              <li key={index} onClick={() => setSelectedHistory(item)} className="p-1 pl-10 truncate text-zinc-400  cursor-pointer hover:text-white hover:bg-zinc-700" >{item}</li>
            ))
          }
        </ul>
      </div>
    )
}

export default RecentSearch;