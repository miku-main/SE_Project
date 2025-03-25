import { FormControl, MenuItem, Select } from "@mui/material";

const Dropdown = ({data, placeholder, selectedValue, handleChange, isMultiple}) => {
    return (
        <FormControl>
            <Select multiple={isMultiple} defaultValue={placeholder} onChange={handleChange} value={selectedValue} sx={{backgroundColor:"#FAADAD", color:"white", width:"10rem", maxHeight:"2.5rem"}}
            renderValue={(selected) => {
                if(selected.length === 0){
                    return <em>{placeholder}</em>
                }
                return selected.join(",");
            }}
            >
                <MenuItem disabled value="">
                    <em>{placeholder}</em>
                </MenuItem>
                {data.map((item) => {
                    return <MenuItem o key={item} value={item}>{item}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default Dropdown;