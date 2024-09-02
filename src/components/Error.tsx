const Error = ({ error = "Something went wrong" }: { error?: string }) => {
   return (
      <div className="mt-8 flex justify-center items-start">
         <div className="p-4 border-2 border-red-500 bg-red-200 text-red-500 font-medium rounded-md">
            {error} 
         </div>
      </div>
   )
}

export default Error
