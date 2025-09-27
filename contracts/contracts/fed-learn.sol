// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract FederatedTrainingReward {
    uint256 public taskCount;
    uint256 public count = 0;
    address public owner;

    mapping(uint256 => string []) public taskWeights;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "not contract owner");
        _;
    }

    mapping(address => bool) public whitelist;

    event Whitelisted(address indexed account, bool status);

    function addToWhitelist(address _account) external onlyOwner {
        whitelist[_account] = true;
        emit Whitelisted(_account, true);
    }

    function removeFromWhitelist(address _account) external onlyOwner {
        whitelist[_account] = false;
        emit Whitelisted(_account, false);
    }

    function isWhitelisted(address _account) external view returns (bool) {
        return whitelist[_account];
    }

    function getCount() public view returns (uint256) {
        return count;
    }

    function getTaskId() public view returns (uint256) {
        return taskCount;
    }

    function taskExists(uint256 taskId) public view returns (bool) {
        return tasks[taskId].exists;
    }

    function incrementCount() public {
        count += 1;
    }

    struct Task {
        address payable depositor;
        string modelUrl; // Akave url of model
        string datasetUrl; // Akave url of dataset
        uint256 numChunks; // total number of chunks
        uint256 remainingChunks; // how many chunk-rewards remain
        uint256 perChunkReward; // hbar per chunk
        bool exists;
    }
}