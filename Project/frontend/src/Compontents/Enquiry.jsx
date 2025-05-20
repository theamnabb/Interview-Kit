import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Textarea, Label, TextInput } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import EnquiryList from "./EnquiryList";

const Enquiry = () => {
  // controled State
  let [enquiryList, setEnquiryList] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let saveEnquiry = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/website/enquiry/insert", formData);
    toast.success("Enquiry Added Successfully"),
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
  };

  // view Enquiry | get Enquiry
  let getAllEnquiry = () => {
    axios
      .get("http://localhost:8000/api/website/enquiry/view")
      .then((res) => {
        return res.data;
      })
      .then((finalData) => {
        if (finalData.status) {
          setEnquiryList(finalData.enquiryList);
        }
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

  useEffect(() => {
    getAllEnquiry();
  }, []);
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
                value={formData.name}
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
        <EnquiryList data={enquiryList} getAllEnquiry={getAllEnquiry} />
      </div>
    </div>
  );
};

export default Enquiry;
