# Installer node 
Installer https://nodejs.org/dist/v22.14.0/node-v22.14.0-x64.msi

# Installer nodemon
```
    npm install -g nodemon # or using yarn: yarn global add nodemon
```

## **🛠 Steps to Create a Windows Service for Your Batch File**
### **1️⃣ Download NSSM (Non-Sucking Service Manager)**
NSSM helps create and manage Windows services.  
- **Download NSSM** from the official source:  
  🔗 [https://nssm.cc/download](https://nssm.cc/download)
- Extract the ZIP file to `C:\nssm`

---

### **2️⃣ Install Your Batch File as a Service**
1. **Open Command Prompt as Administrator**:
   - Press **`Win + R`**, type `cmd`, and press **`Ctrl + Shift + Enter`**.

2. **Navigate to NSSM folder**:
   ```batch
   cd C:\nssm\win64
   ```
   *(Use `win32` if running on a 32-bit system.)*

3. **Install your service**:
   ```batch
   nssm install MyBatchService
   ```
   - This opens a GUI window.

4. **Configure the service**:
   - **Path**: Browse and select your `.bat` file (e.g., `C:\scripts\my_script.bat`).
   - **Startup Directory**: Set the folder containing the `.bat` file (e.g., `C:\scripts`).

5. **Go to the "Details" Tab** and set:
   - **Display name**: `My Batch Service`
   - **Description**: `Runs my batch script as a Windows service.`

6. **Go to the "Exit" Tab** and set:
   - **Action**: `Restart` on `Application Exit` and `Application Crash`.

7. **Click "Install Service"**, then close the window.

---

### **3️⃣ Start the Service**
Run:
```batch
nssm start MyBatchService
```
It will now run **in the background**.

---

### **4️⃣ Ensure It Starts on Boot**
By default, NSSM sets the service to **Automatic Startup**. You can verify:
```batch
sc query MyBatchService
```
or open **Services (`services.msc`)**, find `My Batch Service`, and check its properties.

---

### **5️⃣ Check Logs & Restart on Failure**
- **To restart on failure**, NSSM handles it automatically, but you can also set:
  ```batch
  sc failure MyBatchService reset= 0 actions= restart/60000
  ```
  *(This restarts the service if it fails.)*

- **Check logs**:
  ```batch
  nssm edit MyBatchService
  ```
  Then go to the **I/O Tab** to specify an output log file.

---

### **6️⃣ Uninstall the Service (If Needed)**
If you ever need to **remove the service**, run:
```batch
nssm remove MyBatchService confirm
```

---

## ✅ **Now your Batch file runs as a background Windows Service, restarts on failure, and starts at boot! 🚀**