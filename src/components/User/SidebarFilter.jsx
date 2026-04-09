import React from 'react'
import FormCheckbox from './FormCheckbox'

const SidebarFilter = () => {
  return (
    <aside className='hidden md:block w-56'>

      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-6 border-l-4 border-[#fac039] pl-2">
        Filters
      </h2>

      <form className="divide-y divide-gray-200 space-y-6">

        {/* CATEGORY */}
        <div>
          <fieldset>
            <legend className="text-sm font-medium text-gray-900">
              Category
            </legend>

            <div className="pt-4 space-y-2">
              <FormCheckbox name="phones" label="Phones" />
              <FormCheckbox name="laptops" label="Laptops" />
              <FormCheckbox name="watches" label="Watches" />
            </div>
          </fieldset>
        </div>

        {/* BRAND */}
        <div className="pt-6">
          <fieldset>
            <legend className="text-sm font-medium text-gray-900">
              Brand
            </legend>

            <div className="pt-4 space-y-2">
              <FormCheckbox name="samsung" label="Samsung" />
              <FormCheckbox name="oppo" label="Oppo" />
              <FormCheckbox name="nothing" label="Nothing" />
              <FormCheckbox name="lenovo" label="Lenovo" />
            </div>
          </fieldset>
        </div>

        {/* PRICE */}
        <div className="pt-6">
          <fieldset>
            <legend className="text-sm font-medium text-gray-900">
              Sort by Price
            </legend>

            <div className="pt-4 space-y-2">
              <FormCheckbox name="low-high" label="Low to High" />
              <FormCheckbox name="high-low" label="High to Low" />
            </div>
          </fieldset>
        </div>

      </form>
    </aside>
  )
}

export default SidebarFilter