// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentCertificateContract {
    struct Certificate {
        string firstname;
        string lastname;
        string program;
        string fathername;
        string campus;
        string enrollment_number;
        string registration_number;
        string batch;
        string cgpa;
        string dateofgraduation;
    }

    Certificate[] public certificateList;
    mapping(bytes32 => uint256) public certificateIndex;
    event CertificateAdded(bytes32 uniqueId);
    function addStudentDetails(
        bytes32 uniqueId,
        string memory _firstname,
        string memory _lastname,
        string memory _program,
        string memory _fathername,
        string memory _campus,
        string memory _enrollment_number,
        string memory _registration_number,
        string memory _batch,
        string memory _cgpa,
        string memory _dateofgraduation
    ) public {
        // require(certificateIndex[uniqueId] == 0, "Certificate with this ID already exists");
          if (certificateIndex[uniqueId] != 0) {
        // A certificate with this ID already exists, handle the error condition
        revert("Certificate with this ID already exists");
    }
    // Check for duplicate enrollment number
    for (uint256 i = 0; i < certificateList.length; i++) {
        if (keccak256(bytes(certificateList[i].enrollment_number)) == keccak256(bytes(_enrollment_number))) {
            revert("Duplicate enrollment number");
        }
    }

    // Check for duplicate registration number
    for (uint256 i = 0; i < certificateList.length; i++) {
        if (keccak256(bytes(certificateList[i].registration_number)) == keccak256(bytes(_registration_number))) {
            revert("Duplicate registration number");
        }
    }
        Certificate memory certificate = Certificate({
            
            firstname: _firstname,
            lastname: _lastname,
            program: _program,            
            fathername:_fathername,
            campus:_campus,
            enrollment_number:_enrollment_number,
            registration_number:_registration_number,
            batch:_batch,
            cgpa: _cgpa,
            dateofgraduation: _dateofgraduation
        });

        certificateList.push(certificate);
        // Store the index of the certificate in the mapping
        certificateIndex[uniqueId] = certificateList.length;
        emit CertificateAdded(uniqueId);
    }
    function getAllCertificates() public view returns (Certificate[] memory) {
    return certificateList;
    }
    function getTotalCertificatesCount() public view returns (uint256) {
        return certificateList.length;
    }
    function getCertificateDataByIndex(uint256 index) public view returns (Certificate memory) {
        require(index < certificateList.length, "Invalid certificate index");

        return certificateList[index];
    }
    function getCertificateDataByUUID(bytes32 uniqueId) public view returns (Certificate memory) {
        uint256 index = certificateIndex[uniqueId];
        require(index > 0, "Certificate with this ID does not exist");

        return certificateList[index - 1];
    }
    
}
