namespace RegisterProgram
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.lbCities = new System.Windows.Forms.ListBox();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.txtEmail = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.txtName = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.rbtnCSharp = new System.Windows.Forms.RadioButton();
            this.rbtnASP = new System.Windows.Forms.RadioButton();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.ckdHobbies = new System.Windows.Forms.CheckedListBox();
            this.button1 = new System.Windows.Forms.Button();
            this.btnClear = new System.Windows.Forms.Button();
            this.lblNameShow = new System.Windows.Forms.Label();
            this.lblEmailShow = new System.Windows.Forms.Label();
            this.lblSubjectShow = new System.Windows.Forms.Label();
            this.lblHobbiesShow = new System.Windows.Forms.Label();
            this.lblCityShow = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 30F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(262, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(377, 54);
            this.label1.TabIndex = 0;
            this.label1.Text = "User\'s Registration";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // lbCities
            // 
            this.lbCities.FormattingEnabled = true;
            this.lbCities.ItemHeight = 15;
            this.lbCities.Items.AddRange(new object[] {
            "Kitchener",
            "Waterloo",
            "Cambridge"});
            this.lbCities.Location = new System.Drawing.Point(104, 210);
            this.lbCities.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.lbCities.Name = "lbCities";
            this.lbCities.Size = new System.Drawing.Size(311, 79);
            this.lbCities.TabIndex = 1;
            this.lbCities.SelectedIndexChanged += new System.EventHandler(this.lbCities_SelectedIndexChanged);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.txtEmail);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Controls.Add(this.txtName);
            this.groupBox1.Controls.Add(this.label2);
            this.groupBox1.Location = new System.Drawing.Point(104, 75);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox1.Size = new System.Drawing.Size(311, 108);
            this.groupBox1.TabIndex = 2;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "User";
            // 
            // txtEmail
            // 
            this.txtEmail.Location = new System.Drawing.Point(84, 62);
            this.txtEmail.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.txtEmail.Name = "txtEmail";
            this.txtEmail.Size = new System.Drawing.Size(185, 23);
            this.txtEmail.TabIndex = 3;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(23, 63);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(36, 15);
            this.label3.TabIndex = 2;
            this.label3.Text = "Email";
            // 
            // txtName
            // 
            this.txtName.Location = new System.Drawing.Point(84, 29);
            this.txtName.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.txtName.Name = "txtName";
            this.txtName.Size = new System.Drawing.Size(185, 23);
            this.txtName.TabIndex = 1;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(23, 30);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(39, 15);
            this.label2.TabIndex = 0;
            this.label2.Text = "Name";
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.rbtnCSharp);
            this.groupBox2.Controls.Add(this.rbtnASP);
            this.groupBox2.Location = new System.Drawing.Point(437, 75);
            this.groupBox2.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox2.Size = new System.Drawing.Size(338, 108);
            this.groupBox2.TabIndex = 3;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Subject";
            // 
            // rbtnCSharp
            // 
            this.rbtnCSharp.AutoSize = true;
            this.rbtnCSharp.Location = new System.Drawing.Point(50, 60);
            this.rbtnCSharp.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.rbtnCSharp.Name = "rbtnCSharp";
            this.rbtnCSharp.Size = new System.Drawing.Size(40, 19);
            this.rbtnCSharp.TabIndex = 1;
            this.rbtnCSharp.TabStop = true;
            this.rbtnCSharp.Text = "C#";
            this.rbtnCSharp.UseVisualStyleBackColor = true;
            // 
            // rbtnASP
            // 
            this.rbtnASP.AutoSize = true;
            this.rbtnASP.Location = new System.Drawing.Point(50, 32);
            this.rbtnASP.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.rbtnASP.Name = "rbtnASP";
            this.rbtnASP.Size = new System.Drawing.Size(46, 19);
            this.rbtnASP.TabIndex = 0;
            this.rbtnASP.TabStop = true;
            this.rbtnASP.Text = "ASP";
            this.rbtnASP.UseVisualStyleBackColor = true;
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.ckdHobbies);
            this.groupBox3.Location = new System.Drawing.Point(437, 188);
            this.groupBox3.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.groupBox3.Size = new System.Drawing.Size(338, 118);
            this.groupBox3.TabIndex = 4;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "Hobbies";
            // 
            // ckdHobbies
            // 
            this.ckdHobbies.FormattingEnabled = true;
            this.ckdHobbies.Items.AddRange(new object[] {
            "Reading",
            "Sports",
            "Work"});
            this.ckdHobbies.Location = new System.Drawing.Point(17, 22);
            this.ckdHobbies.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.ckdHobbies.Name = "ckdHobbies";
            this.ckdHobbies.Size = new System.Drawing.Size(299, 76);
            this.ckdHobbies.TabIndex = 0;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(262, 318);
            this.button1.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(152, 39);
            this.button1.TabIndex = 5;
            this.button1.Text = "Register";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // btnClear
            // 
            this.btnClear.Location = new System.Drawing.Point(437, 318);
            this.btnClear.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.btnClear.Name = "btnClear";
            this.btnClear.Size = new System.Drawing.Size(154, 39);
            this.btnClear.TabIndex = 6;
            this.btnClear.Text = "Reset";
            this.btnClear.UseVisualStyleBackColor = true;
            this.btnClear.Click += new System.EventHandler(this.button2_Click);
            // 
            // lblNameShow
            // 
            this.lblNameShow.AutoSize = true;
            this.lblNameShow.Location = new System.Drawing.Point(142, 365);
            this.lblNameShow.Name = "lblNameShow";
            this.lblNameShow.Size = new System.Drawing.Size(0, 15);
            this.lblNameShow.TabIndex = 7;
            // 
            // lblEmailShow
            // 
            this.lblEmailShow.AutoSize = true;
            this.lblEmailShow.Location = new System.Drawing.Point(142, 389);
            this.lblEmailShow.Name = "lblEmailShow";
            this.lblEmailShow.Size = new System.Drawing.Size(0, 15);
            this.lblEmailShow.TabIndex = 8;
            // 
            // lblSubjectShow
            // 
            this.lblSubjectShow.AutoSize = true;
            this.lblSubjectShow.Location = new System.Drawing.Point(142, 413);
            this.lblSubjectShow.Name = "lblSubjectShow";
            this.lblSubjectShow.Size = new System.Drawing.Size(0, 15);
            this.lblSubjectShow.TabIndex = 9;
            // 
            // lblHobbiesShow
            // 
            this.lblHobbiesShow.AutoSize = true;
            this.lblHobbiesShow.Location = new System.Drawing.Point(142, 436);
            this.lblHobbiesShow.Name = "lblHobbiesShow";
            this.lblHobbiesShow.Size = new System.Drawing.Size(0, 15);
            this.lblHobbiesShow.TabIndex = 10;
            // 
            // lblCityShow
            // 
            this.lblCityShow.AutoSize = true;
            this.lblCityShow.Location = new System.Drawing.Point(140, 466);
            this.lblCityShow.Name = "lblCityShow";
            this.lblCityShow.Size = new System.Drawing.Size(0, 15);
            this.lblCityShow.TabIndex = 11;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Cursor = System.Windows.Forms.Cursors.Cross;
            this.label4.Location = new System.Drawing.Point(104, 190);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(36, 15);
            this.label4.TabIndex = 12;
            this.label4.Text = "Cities";
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(859, 490);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.lblCityShow);
            this.Controls.Add(this.lblHobbiesShow);
            this.Controls.Add(this.lblSubjectShow);
            this.Controls.Add(this.lblEmailShow);
            this.Controls.Add(this.lblNameShow);
            this.Controls.Add(this.btnClear);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.lbCities);
            this.Controls.Add(this.label1);
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Label label1;
        private ListBox lbCities;
        private GroupBox groupBox1;
        private TextBox txtEmail;
        private Label label3;
        private TextBox txtName;
        private Label label2;
        private GroupBox groupBox2;
        private RadioButton rbtnCSharp;
        private RadioButton rbtnASP;
        private GroupBox groupBox3;
        private CheckedListBox ckdHobbies;
        private Button button1;
        private Button btnClear;
        private Label lblNameShow;
        private Label lblEmailShow;
        private Label lblSubjectShow;
        private Label lblHobbiesShow;
        private Label lblCityShow;
        private Label label4;
    }
}