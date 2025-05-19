
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
const EnquiryList = ({data}) => {
  return (
    <div className="bg-blue-900 p-5 rounded-2xl">
          <h2 className="text-[20px] font-bold text-amber-300 ">
            Enquiry List
          </h2>
          <div className="overflow-x-auto ">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Sr.No</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                  <TableHeadCell>Delete</TableHeadCell>
                  <TableHeadCell>Edit</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Delete</span>
                  </TableHeadCell>
                </TableRow>
              </TableHead>
             <TableBody className="divide-y">
  {data && data.length > 0 ? (
    data.map((item, index) => (
      <TableRow
        key={index}
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
          <button className="text-red-500">Delete</button>
        </TableCell>
        <TableCell>
          <button className="text-blue-500">Edit</button>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow className="bg-white dark:border-gray-700">
      <TableCell colSpan={9} className="text-center text-gray-700">
        No Enquiries Found
      </TableCell>
    </TableRow>
  )}
</TableBody>

            </Table>
          </div>
        </div>
  )
}

export default EnquiryList