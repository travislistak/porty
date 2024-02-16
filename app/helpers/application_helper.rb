module ApplicationHelper
  def rich_to_plain_without_images(content)
    content.to_plain_text.gsub(/[\[].*[\]]/, "").gsub(/\\n/, " ").truncate(1000)
  end

  def humanize_date(date)
    date.strftime("%d %b, %y")
  end
end
