/* eslint-disable jsx-a11y/anchor-is-valid */
export default function FormExtra(){
    return(
      <div className="items-center justify-between lg:grid-flow-col grid-flow-row grid">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-600 hover:text-blue-400">
            Remember me
          </label>
        </div>

        <div className="text-sm py-2">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}