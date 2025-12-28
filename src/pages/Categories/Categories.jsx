import { ConfigProvider, Table, Modal } from "antd";
import { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";

function Categories() {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [dataSource] = useState([
    {
      key: "1",
      id: 1,
      sid: "01",
      name: "Food",
      icon: "/icons/aircon.png",
      subcategories: [
        { key: "1-1", name: "Fast Food", description: "Quick and convenient meals" },
        { key: "1-2", name: "Organic Food", description: "Healthy organic products" },
        { key: "1-3", name: "Frozen Food", description: "Ready-to-cook frozen items" },
      ],
    },
    {
      key: "2",
      id: 2,
      sid: "02",
      name: "Clothing",
      icon: "/icons/electric.png",
      subcategories: [
        { key: "2-1", name: "Men's Wear", description: "Clothing for men" },
        { key: "2-2", name: "Women's Wear", description: "Clothing for women" },
        { key: "2-3", name: "Kids' Wear", description: "Clothing for children" },
      ],
    },
    {
      key: "3",
      id: 3,
      sid: "03",
      name: "Electronics",
      icon: "/icons/siding.png",
      subcategories: [
        { key: "3-1", name: "Mobile Phones", description: "Latest smartphones" },
        { key: "3-2", name: "Laptops", description: "Computers and laptops" },
        { key: "3-3", name: "Accessories", description: "Electronic accessories" },
      ],
    },
    {
      key: "4",
      id: 4,
      sid: "04",
      name: "Furniture",
      icon: "/icons/paint.png",
      subcategories: [
        { key: "4-1", name: "Living Room", description: "Sofas, tables, and chairs" },
        { key: "4-2", name: "Bedroom", description: "Beds and wardrobes" },
        { key: "4-3", name: "Office", description: "Desks and office chairs" },
      ],
    },
    {
      key: "5",
      id: 5,
      sid: "05",
      name: "Health",
      icon: "/icons/plumbing.png",
      subcategories: [
        { key: "5-1", name: "Supplements", description: "Vitamins and minerals" },
        { key: "5-2", name: "Medical Devices", description: "Health monitoring devices" },
        { key: "5-3", name: "Personal Care", description: "Hygiene products" },
      ],
    },
    {
      key: "6",
      id: 6,
      sid: "06",
      name: "Home",
      icon: "/icons/floor.png",
      subcategories: [
        { key: "6-1", name: "Kitchen", description: "Kitchen appliances and tools" },
        { key: "6-2", name: "Bathroom", description: "Bathroom accessories" },
        { key: "6-3", name: "Decor", description: "Home decoration items" },
      ],
    },
    {
      key: "7",
      id: 7,
      sid: "07",
      name: "Fruits",
      icon: "/icons/roof.png",
      subcategories: [
        { key: "7-1", name: "Fresh Fruits", description: "Seasonal fresh fruits" },
        { key: "7-2", name: "Dried Fruits", description: "Healthy dried fruits" },
        { key: "7-3", name: "Exotic Fruits", description: "Imported exotic fruits" },
      ],
    },
    {
      key: "8",
      id: 8,
      sid: "08",
      name: "Garden",
      icon: "/icons/clean.png",
      subcategories: [
        { key: "8-1", name: "Plants", description: "Indoor and outdoor plants" },
        { key: "8-2", name: "Tools", description: "Gardening tools and equipment" },
        { key: "8-3", name: "Seeds", description: "Vegetable and flower seeds" },
      ],
    },
    {
      key: "9",
      id: 9,
      sid: "09",
      name: "Gym",
      icon: "/icons/move.png",
      subcategories: [
        { key: "9-1", name: "Equipment", description: "Gym equipment and machines" },
        { key: "9-2", name: "Apparel", description: "Workout clothing" },
        { key: "9-3", name: "Supplements", description: "Protein and fitness supplements" },
      ],
    },
  ]);

  const showViewModal = (category) => {
    setSelectedCategory(category);
    setIsViewModalOpen(true);
  };

  const handleViewCancel = () => {
    setIsViewModalOpen(false);
    setSelectedCategory(null);
  };

  const columns = [
    {
      title: "S.ID",
      dataIndex: "sid",
      key: "sid",
      width: 100,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      width: 150,
      render: (_, record) => (
        <div className="flex gap-2">
          <button
            className="text-[#9333EA] hover:opacity-80"
            aria-label="view"
            onClick={() => showViewModal(record)}
          >
            <FaRegEye className="w-5 h-5" />
          </button>
          <button
            className="text-[#9333EA] hover:opacity-80"
            aria-label="edit"
          >
            <FiEdit2 className="w-5 h-5" />
          </button>
          <button
            className="text-red-600 hover:opacity-80"
            aria-label="delete"
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-[#9333EA] px-4 md:px-5 py-3 rounded-md mb-3 flex items-center justify-between">
        <h1 className="text-white text-xl sm:text-2xl font-bold">Categories</h1>
        <button className="flex items-center gap-2 bg-white text-[#9333EA] font-semibold px-4 py-2 rounded-md border border-[#9333EA] hover:bg-gray-50 transition">
          <FiPlus />
          <span>Add Categories</span>
        </button>
      </div>

      {/* Table */}
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#9333EA",
            },
            Pagination: {
              colorPrimaryBorder: "#9333EA",
              colorBorder: "#9333EA",
              colorPrimaryHover: "#9333EA",
              colorTextPlaceholder: "#9333EA",
              itemActiveBgDisabled: "#9333EA",
              colorPrimary: "#9333EA",
            },
            Table: {
              headerBg: "#9333EA",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#9333EA",
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 8 }}
          scroll={{ x: "max-content" }}
        />

        {/* View Subcategories Modal */}
        <Modal
          open={isViewModalOpen}
          centered
          onCancel={handleViewCancel}
          footer={null}
          width={700}
          className="subcategory-modal"
        >
          {selectedCategory && (
            <div className="relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#9333EA] to-[#9333EA] p-6 -m-6 mb-6 rounded-t-lg">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory.name} - Subcategories
                </h2>
                <p className="text-white/80 mt-1">View all items within this category</p>
              </div>

              {/* Subcategories Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">No</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Subcategory Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCategory.subcategories && selectedCategory.subcategories.length > 0 ? (
                      selectedCategory.subcategories.map((sub, index) => (
                        <tr key={sub.key} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-800">{index + 1}</td>
                          <td className="py-3 px-4 font-medium text-gray-900">{sub.name}</td>
                          <td className="py-3 px-4 text-gray-600">{sub.description}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="py-8 px-4 text-center text-gray-500">
                          No subcategories available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end items-center mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={handleViewCancel}
                  className="bg-gray-500 text-white font-semibold px-8 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      </ConfigProvider>
    </div>
  );
}

export default Categories;
