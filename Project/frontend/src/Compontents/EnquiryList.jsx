
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
const EnquiryList = () => {
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
                <TableRow className="">
                  <TableCell className="whitespace-nowrap font-medium  ">
                    01
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>Hello Word</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Delete
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
  )
}

export default EnquiryList