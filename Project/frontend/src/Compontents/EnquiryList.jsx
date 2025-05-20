import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";

const EnquiryList = ({ data }) => {
  let deleteRow = (delId) => {
    alert(delId);
  };

  return (
    <div className="bg-blue-900 p-5 rounded-2xl">
      <h2 className="text-[20px] font-bold text-amber-300 mb-4">
        Enquiry List
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr. No</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell>Edit</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <TableRow
                  key={item.id || index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.message}</TableCell>
                  <TableCell>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-lg  cursor-pointer">
                      Edit
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={()=> deleteRow(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg  cursor-pointer"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell
                  colSpan={7}
                  className="text-center text-gray-700 dark:text-white"
                >
                  No Enquiries Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EnquiryList;
