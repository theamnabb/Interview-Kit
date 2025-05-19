
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
    <div className="bg-blue-900 p-4 rounded-2xl">
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
                {/* Map through the data and display it in the table */}
                {
                  data.length>=1 ?
                data.map((item, index) => (
                  <>
                  </>
                )):
                <TableRow className="bg-white dark:border-gray-700 ">
                  <TableCell colSpan={9} className="whitespace-nowrap font-medium text-center ">
                    Not found any enquiry  </TableCell>
                    </TableRow>
                    }
              </TableBody>
            </Table>
          </div>
        </div>
  )
}

export default EnquiryList