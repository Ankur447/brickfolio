import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

// Reusable component for filter dropdowns
const FilterSelect = ({ options, defaultOption, onChange, selectedValue }) => {
  return (
    <select
      className="border-gray-300 text-gray-600 focus:outline-none rounded-sm px-2 py-1 text-sm bg-white min-w-[120px]"
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{defaultOption}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const Filter = () => {
  const locations = ["Kharadi", "Viman Nagar", "Kalyani Nagar"];
  const priceRange = ["₹0 - ₹5.00 Cr"];
  const bhkTypes = ["1 BHK", "2 BHK", "3 BHK"];
  const propertyTypes = ["Apartment", "Villa", "Studio"];
  const saleTypes = ["New", "Resale"];
  const possessionStatus = ["Ready to Move", "Under Construction"];
  const amenities = ["Swimming Pool", "Gym", "Club House"];

  // State for selected values
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedBhkType, setSelectedBhkType] = useState("");
  const [selectedBuyInPune, setSelectedBuyInPune] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedSaleType, setSelectedSaleType] = useState("");
  const [selectedPossessionStatus, setSelectedPossessionStatus] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FF7A00] h-auto flex flex-wrap justify-center py-3 min-w-[600px]">
        <div className="flex w-full items-center px-4 gap-3 overflow-x-auto scrollbar-hide">
          {/* Filter Button - Visible on small screens */}
          <button 
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="flex items-center justify-center bg-white px-3 py-1 rounded-sm text-sm"
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            <span className="hidden sm:inline">Filters</span>
          </button>

          {/* Horizontal scrollable filters */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide py-0.5">
            <FilterSelect
              options={locations}
              defaultOption="Sort"
              selectedValue={selectedLocation}
              onChange={setSelectedLocation}
            />
            <FilterSelect
              options={propertyTypes}
              defaultOption="Property Type"
              selectedValue={selectedPropertyType}
              onChange={setSelectedPropertyType}
            />
            <FilterSelect
              options={bhkTypes}
              defaultOption="BHK Type"
              selectedValue={selectedBhkType}
              onChange={setSelectedBhkType}
            />
            <FilterSelect
              options={locations}
              defaultOption="Buy In Pune"
              selectedValue={selectedBuyInPune}
              onChange={setSelectedBuyInPune}
            />
            <FilterSelect
              options={priceRange}
              defaultOption="₹0 - ₹5.00 Cr"
              selectedValue={selectedPriceRange}
              onChange={setSelectedPriceRange}
              className="hidden sm:block"
            />
            <FilterSelect
              options={saleTypes}
              defaultOption="Sale Type"
              selectedValue={selectedSaleType}
              onChange={setSelectedSaleType}
              className="hidden sm:block"
            />
            <FilterSelect
              options={possessionStatus}
              defaultOption="Possession Status"
              selectedValue={selectedPossessionStatus}
              onChange={setSelectedPossessionStatus}
              className="hidden sm:block"
            />
            <FilterSelect
              options={amenities}
              defaultOption="Amenities"
              selectedValue={selectedAmenities}
              onChange={setSelectedAmenities}
              className="hidden sm:block"
            />
          </div>
        </div>
      </div>

      {/* Filter Menu Modal - Shows when filter button is clicked */}
      {isFilterMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full sm:w-96 sm:rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button 
                  onClick={() => setIsFilterMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {/* Filter options in modal */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <FilterSelect
                    options={locations}
                    defaultOption="Sort"
                    selectedValue={selectedLocation}
                    onChange={setSelectedLocation}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Type</label>
                  <FilterSelect
                    options={propertyTypes}
                    defaultOption="Property Type"
                    selectedValue={selectedPropertyType}
                    onChange={setSelectedPropertyType}
                  />
                </div>
                {/* Add more filter options as needed */}
              </div>
              <div className="flex gap-3 pt-4 border-t">
                <button 
                  onClick={() => setIsFilterMenuOpen(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 rounded-md text-gray-700"
                >
                  Clear All
                </button>
                <button 
                  onClick={() => setIsFilterMenuOpen(false)}
                  className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
