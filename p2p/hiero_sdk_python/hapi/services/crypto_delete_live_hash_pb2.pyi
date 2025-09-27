from typing import ClassVar as _ClassVar
from typing import Mapping as _Mapping
from typing import Optional as _Optional
from typing import Union as _Union

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message

from . import basic_types_pb2 as _basic_types_pb2

DESCRIPTOR: _descriptor.FileDescriptor

class CryptoDeleteLiveHashTransactionBody(_message.Message):
    __slots__ = ("accountOfLiveHash", "liveHashToDelete")
    ACCOUNTOFLIVEHASH_FIELD_NUMBER: _ClassVar[int]
    LIVEHASHTODELETE_FIELD_NUMBER: _ClassVar[int]
    accountOfLiveHash: _basic_types_pb2.AccountID
    liveHashToDelete: bytes
    def __init__(
        self,
        accountOfLiveHash: _Optional[
            _Union[_basic_types_pb2.AccountID, _Mapping]
        ] = ...,
        liveHashToDelete: _Optional[bytes] = ...,
    ) -> None: ...
