import React, { useEffect, useState } from 'react';
import { getData } from '../context/DataContext';
import FilterSection from '../components/FilterSection';
import Loading from '../assets/Loading4.webm';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Lottie from 'lottie-react';
import notfound from '../assets/notfound.json';
import MobileFilter from '../components/MobileFilter';

const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        await fetchAllProducts();
      } catch (error) {
        setError('Failed to load products. Please try again.');
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(false);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const [sortBy, setSortBy] = useState('default'); // new state for sorting

  const filteredAndSortedData = React.useMemo(() => {
    if (!data) return [];

    let filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'All' || item.category === category) &&
        (brand === 'All' || item.brand === brand) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

    // Sort the filtered data
    switch (sortBy) {
      case 'price-asc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return filtered;
    }
  }, [data, search, category, brand, priceRange, sortBy]);

  const dynamicPage = Math.ceil(filteredAndSortedData.length / 8);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-[400px]'>
        <video muted autoPlay loop>
          <source src={Loading} type='video/webm' />
        </video>
      </div>
    );
  }

  if (error) {
    return (
      <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
        <div className='text-center text-red-500 font-semibold'>{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          search={search}
          setSearch={setSearch}
          brand={brand}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          category={category}
          setCategory={setCategory}
          handleCategoryChange={handleCategoryChange}
          handleBrandChange={handleBrandChange}
        />

        <div className='flex gap-8'>
          <FilterSection
            search={search}
            setSearch={setSearch}
            brand={brand}
            setBrand={setBrand}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            category={category}
            setCategory={setCategory}
            handleCategoryChange={handleCategoryChange}
            handleBrandChange={handleBrandChange}
          />
          <div className='flex-1'>
            {/* Sort Options */}
            <div className='flex justify-end mb-4'>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='p-2 border rounded-md bg-white'
              >
                <option value='default'>Default</option>
                <option value='price-asc'>Price: Low to High</option>
                <option value='price-desc'>Price: High to Low</option>
                <option value='name-asc'>Name: A to Z</option>
                <option value='name-desc'>Name: Z to A</option>
              </select>
            </div>

            {filteredAndSortedData.length > 0 ? (
              <div className='flex flex-col justify-center items-center'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 mt-10'>
                  {filteredAndSortedData
                    .slice(page * 8 - 8, page * 8)
                    .map((product, index) => (
                      <ProductCard key={product.id || index} product={product} />
                    ))}
                </div>
                <Pagination
                  pageHandler={pageHandler}
                  page={page}
                  dynamicPage={dynamicPage}
                />
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center md:h-[600px] md:w-[900px] mt-10'>
                <Lottie animationData={notfound} className='w-[500px]' />
                <p className='text-gray-500 mt-4'>
                  No products found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;