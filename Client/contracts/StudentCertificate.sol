// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentCertificateContract {
    struct Certificate {
        string firstname;
        string lastname;
        string program;
        string cgpa;
        string dateofgraduation;
    }

    mapping(address => Certificate) public certificates;
    address[] public certificateList;

    function addStudentDetails(
        string memory _firstname,
        string memory _lastname,
        string memory _program,
        string memory _cgpa,
        string memory _dateofgraduation
    ) public {
        Certificate storage certificate = certificates[msg.sender];
        certificate.firstname = _firstname;
        certificate.lastname = _lastname;
        certificate.program = _program;
        certificate.cgpa = _cgpa;
        certificate.dateofgraduation = _dateofgraduation;
        
        certificateList.push(msg.sender);
    }
    
    function getTotalCertificates() public view returns (uint256) {
        return certificateList.length;
    }
    
    function getCertificateData(uint256 index) public view returns (Certificate memory) {
        require(index < certificateList.length, "Invalid certificate index");
        
        address certificateAddress = certificateList[index];
        return certificates[certificateAddress];
    }

    function getFirstName(address _address) public view returns (string memory) {
        return certificates[_address].firstname;
    }

    function getLastName(address _address) public view returns (string memory) {
        return certificates[_address].lastname;
    }

    function getProgram(address _address) public view returns (string memory) {
        return certificates[_address].program;
    }

    function getCGPA(address _address) public view returns (string memory) {
        return certificates[_address].cgpa;
    }
    
    function getDateOfGraduation(address _address) public view returns (string memory) {
        return certificates[_address].dateofgraduation;
    }
}
