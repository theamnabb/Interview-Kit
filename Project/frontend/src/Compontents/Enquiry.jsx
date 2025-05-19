import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Textarea,
  Label,
  TextInput,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';



const Enquiry = () => {

// controled State

let [formData, setFormData] = useState({
  name:"",
  email: "",
  phone: "",  
  message: "",
});

  let saveEnquiry = (e) => {
   
    axios.post("http://localhost:8000/api/website/enquiry/insert", formData);
    toast.success("Enquiry Added Successfully"), 
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Get the data from the API
  let getInputValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };
  return (
    <div>
    <ToastContainer />
      <h1 className="text-[40px] text-center py-6 font-bold ">User Enquiry</h1>
      <div className="grid grid-cols-[30%_auto] gap-9">
        {/* Form Side  */}
        <div className="bg-blue-900 p-4 rounded-2xl">
          <h2 className="text-[20px] font-bold text-amber-300">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry}>
            <div className="p-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                id="name"
                type="text"
                name="name"
                value = {formData.name}
                onChange={getInputValue}
                placeholder="Your Name"
                required
              />
            </div>
            {/* Email */}
            <div className="p-3">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={getInputValue}
                placeholder="email@gamil.com"
                required
              />
            </div>
            {/*Phone number */}
            <div className="p-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={getInputValue}
                placeholder="+92 3055504567"
                required
              />
            </div>
            {/* Message */}
            <div className="p-3">
              <Label htmlFor="phone">Message</Label>
              <Textarea
                id="message"
                onChange={getInputValue}
                name="message"
                value={formData.message}
                placeholder="Leave a message..."
                required
                rows={4}
              />
            </div>

            {/* Button */}
            <div className="p-3">
              <Button type="submit" className="w-[100%]">
                Save
              </Button>
            </div>
          </form>
        </div>

        {/* Table side  */}
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
      </div>
    </div>
  );
};

export default Enquiry;
