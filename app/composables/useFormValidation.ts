export function useFormValidation() {
  function getErrorDetail(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    const validity = input.validity;

    const error: {
      type: string | null;
      message: string | null;
      details: Partial<ValidityState>;
    } = {
      type: null,
      message: null,
      details: validity,
    };

    if (validity.valueMissing) {
      error.type = "required";
      error.message = "Trường này là bắt buộc.";
    } else if (validity.typeMismatch) {
      error.type = "typeMismatch";
      error.message = "Dữ liệu không đúng định dạng.";
    } else if (validity.patternMismatch) {
      error.type = "patternMismatch";
      error.message = "Giá trị không khớp với mẫu yêu cầu.";
    } else if (validity.tooShort && input instanceof HTMLInputElement) {
      error.type = "tooShort";
      error.message = `Giá trị quá ngắn, cần ít nhất ${input.minLength} ký tự.`;
    } else if (validity.tooLong && input instanceof HTMLInputElement) {
      error.type = "tooLong";
      error.message = `Giá trị quá dài, tối đa ${input.maxLength} ký tự.`;
    } else if (validity.rangeUnderflow && input instanceof HTMLInputElement) {
      error.type = "rangeUnderflow";
      error.message = `Giá trị nhỏ nhất là ${input.min}.`;
    } else if (validity.rangeOverflow && input instanceof HTMLInputElement) {
      error.type = "rangeOverflow";
      error.message = `Giá trị lớn nhất là ${input.max}.`;
    } else if (validity.stepMismatch) {
      error.type = "stepMismatch";
      error.message = "Giá trị không đúng với bước nhảy (step).";
    } else if (validity.badInput) {
      error.type = "badInput";
      error.message = "Giá trị không hợp lệ.";
    } else if (validity.customError) {
      error.type = "customError";
      error.message = input.validationMessage;
    }

    return error;
  }

  return { getErrorDetail };
}
