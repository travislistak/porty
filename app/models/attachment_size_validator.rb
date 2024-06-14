class AttachmentSizeValidator < ActiveModel::EachValidator
  ACCEPTABLE_TYPES = %w[application/pdf image/jpeg image/png]
  MAXIMUM_BYTES = 2_100_000
  def validate_each(record, attribute, value)
    if value.body.attachments.any? do |attachment|
      if ACCEPTABLE_TYPES.exclude?(attachment.content_type)
        record.errors.add :content, "Not acceptable file type. Acceptable types are #{ACCEPTABLE_TYPES.join(", ")}"
      end
      attachment.byte_size <= MAXIMUM_BYTES

    end
      binding.pry
      record.errors.add :content, "Attachy no no"
    end
  end
end