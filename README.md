
GitHub 對上傳檔案大小有限制，具體如下：

- **通過網頁介面上傳**：單一檔案大小限制為 **25 MB**。
- **通過 Git 推送（Desktop 或命令列）**：單一檔案大小限制為 **100 MB**。若檔案超過 50 MB，GitHub 會發出警告，但仍可推送；超過 100 MB 則會被阻止。
- **使用 Git LFS（Large File Storage）**：Git LFS 允許上傳大檔案，單一檔案上限為 **2 GB**。Git LFS 會將大檔案儲存在外部伺服器，並在儲存庫中保留指向該檔案的輕量指標。
- **儲存庫整體大小**：建議儲存庫大小保持在 **1 GB** 以下，強烈建議不超過 **5 GB**，以確保效能和克隆速度。超過 5 GB 可能會影響基礎設施，GitHub 支援團隊可能要求採取措施。
- **Git LFS 儲存配額**：預設每個儲存庫有 **1 GB** 的 Git LFS 儲存空間，可購買額外空間。

若需上傳超過 100 MB 的檔案，必須使用 **Git LFS** 或其他外部儲存服務（如 Amazon S3、Google Cloud Storage 或 Dropbox），並在 GitHub 中添加指向這些檔案的連結。對於超過 2 GB 的檔案，建議分割檔案或使用其他解決方案。[1](https://docs.github.com/zh/repositories/working-with-files/managing-large-files/about-large-files-on-github)[2](https://www.cnblogs.com/asyaB404/p/18278850)[3](https://docs.github.com/zh/repositories/working-with-files/managing-large-files)

---

