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

    Certificate[] public certificateList;

    function addStudentDetails(
        string memory _firstname,
        string memory _lastname,
        string memory _program,
        string memory _cgpa,
        string memory _dateofgraduation
    ) public {
        Certificate memory certificate = Certificate({
            firstname: _firstname,
            lastname: _lastname,
            program: _program,
            cgpa: _cgpa,
            dateofgraduation: _dateofgraduation
        });

        certificateList.push(certificate);
    }
    function getTotalCertificates() public view returns (uint256) {
        return certificateList.length;
    }
    
    function getCertificateData(uint256 index) public view returns (Certificate memory) {
        require(index < certificateList.length, "Invalid certificate index");

        return certificateList[index];
    }
    
}
