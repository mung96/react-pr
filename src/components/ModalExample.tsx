import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModalExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openConfirmModal = () => setIsConfirmModalOpen(true);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);

  const handleConfirm = () => {
    alert("확인되었습니다!");
    closeConfirmModal();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Portal 모달 예제</h1>

      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        <button
          onClick={openModal}
          style={{
            padding: "12px 24px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          기본 모달 열기
        </button>

        <button
          onClick={openConfirmModal}
          style={{
            padding: "12px 24px",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          확인 모달 열기
        </button>
      </div>

      {/* 기본 모달 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="기본 모달">
        <p>이것은 React Portal을 사용한 기본 모달입니다.</p>
        <p>모달 외부를 클릭하거나 ESC 키를 누르면 닫힙니다.</p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={closeModal}
            style={{
              padding: "8px 16px",
              backgroundColor: "#6b7280",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            닫기
          </button>
        </div>
      </Modal>

      {/* 확인 모달 */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        title="확인 모달"
      >
        <p>정말로 이 작업을 수행하시겠습니까?</p>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          이 작업은 되돌릴 수 없습니다.
        </p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={closeConfirmModal}
            style={{
              padding: "8px 16px",
              backgroundColor: "#6b7280",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
