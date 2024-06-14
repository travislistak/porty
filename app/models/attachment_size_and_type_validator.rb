class AttachmentSizeAndTypeValidator < ActiveModel::EachValidator
  ACCEPTABLE_TYPES = %w[application/pdf image/jpeg image/png]
  MAXIMUM_BYTES = 2_100_000

  def validate_each(record, attribute, value)
    attachment_bytes_total = 0

    value.body.attachments.each do |attachment|
      if ACCEPTABLE_TYPES.exclude?(attachment.content_type)
        record.errors.add :content, "Not acceptable file type. Acceptable types are #{ACCEPTABLE_TYPES.join(", ")}"
      end
      attachment_bytes_total += attachment.byte_size
    end

    if attachment_bytes_total >= MAXIMUM_BYTES
      record.errors.add :content, "File(s) too large. Maximum size is #{MAXIMUM_BYTES / 1000000.00}MB for all attachments"
    end
  end
end